export default {
    q1: {
        message: 'which is your favour battle ship?',
        options: [{
            label: 'Destroyer', value: 'destroyer'
        }, {
            label: 'Carrier', value: 'carrier',
        }, {
            label: 'cruiser', value: 'cruiser',
        }],
        action: ['echo', 'q2', function(resolve, res) {
            setTimeout(() => resolve(res), 2000)
        },],
        type: 'question',
        stage: 'q1',
    },
    q2: {
        message: 'which is your favour fighter?',
        options: [{
            label: 'Mig-29', value: 'mig29'
        }, {
            label: 'Su-30', value: 'su30',
        }, {
            label: 'J10', value: 'j10',
        }],
        type: 'question',
        action: ['echo', 'q3', function(resolve, res) {
            setTimeout(() => resolve(res), 500)
        },],
        stage: 'q2',
    },
    q3: {
        message: 'which is your favour gun?',
        options: [{
            label: 'AK-47', value: 'ak47'
        }, {
            label: 'M-16', value: 'm16',
        }, {
            label: 'YY-00', value: 'yy00',
        }],
        type: 'question',
        stage: 'q3',
        action: ['echo', 'q4', function(resolve, res) {
            setTimeout(() => resolve(res), 2000)
        },],
    },
    q4: {
        message: 'which is your favour tank?',
        options: [{
            label: 'T-29', value: 't29'
        }, {
            label: 'T-59', value: 't59',
        }, {
            label: 'T-80', value: 't80',
        }],
        type: 'question',
        stage: 'q4',
        action: ['echo'],
    }
}