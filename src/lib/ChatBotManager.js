import {query} from '@/services/dialogflow-service';
import {guid, getLast} from '@/lib/utils';

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

const queryDialogFlow = (qry) => {
      const sessionId = guid();

      const result  = {
          intent: null,
          message: null,
          action: null,
          sessionId: null,
      };

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

    queryDialogFlow(query).then(res => {
        res.type = 'question';
        cmpt.addProgress(res);
    });
};

const pushQueryStack = (query) => {
    queryStack.push(query);
};

export {setCallback, getCallback, setResolve, getResolve, queryDialogFlow, triggerDialogFlow, pushQueryStack};