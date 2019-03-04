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
        action: ['echo', 'q2'],
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
        stage: 'q2',
    }
}