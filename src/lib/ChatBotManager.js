import {query} from '@/services/dialogflow-service';
import {guid, getLast} from '@/lib/utils';
import dialogFlowConfig from '@/config/dialog-flow';
import Vue from 'vue'

const initialQuery = 'get question1';
let queryStack = [];

let callback, resolve;

const setCallback = (cb) => {
    callback = cb;
};

const getCallback = () => {
    return callback
};

const setResolve = (rsv) => {
    resolve = rsv;
};

const getResolve= () => {
    return resolve;
};

const queryDialogFlow = (qry, isManual) => {
      const sessionId = guid();

      if (true === isManual) {
          const result  = dialogFlowConfig[qry];
          if (undefined === result) {
              return Promise.resolve(null);
          }
          result.options = result.action ? result.action.split(',') : [];
          result.sessionId = sessionId;

          return Promise.resolve(result);
      }

      const request = query(qry, sessionId);
      return new Promise(resolve => {
          request.then((res) => {
              const data = res.data;

              const result  = {
                  intent: data.result.metadata.intentName,
                  message: data.result.fulfillment.speech,
                  action: data.result.action,
                  sessionId: data.sessionId,
                  options: data.result.action ? data.result.action.split(',') : [],
              };

              resolve(result);
          })
      }, (reject) => {
          request.catch(err => reject(err));
      });
};

const triggerDialogFlow = (cmpt) => {
    if (queryStack.length === 0) {
        queryStack.push(initialQuery);
    }

    const query = getLast(queryStack);

    if (undefined === cmpt) {
        return queryDialogFlow(query);
    }

    queryDialogFlow(query, Vue.config.dialogFlowManual).then(res => {
        if (null === res) {
            return;
        }
        res.type = 'question';
        cmpt.addProgress(res);
    });
};

const pushQueryStack = (query) => {
    queryStack.push(query);
};

export {setCallback, getCallback, setResolve, getResolve, queryDialogFlow, triggerDialogFlow, pushQueryStack};