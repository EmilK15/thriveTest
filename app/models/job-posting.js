import Model, { attr } from '@ember-data/model';

export default class JobPostingModel extends Model {
    @attr('string') businessName;
    @attr('string') role;
    @attr('string') primaryBusiness;
    @attr('boolean') techBackground;
}
