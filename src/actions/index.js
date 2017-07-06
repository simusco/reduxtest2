import keywordActions from './KeywordAction';
import chargeActions from './ChargeAction';
import loginActions from './LoginAction';

export default {
    ...keywordActions,
    ...chargeActions,
    ...loginActions,
}