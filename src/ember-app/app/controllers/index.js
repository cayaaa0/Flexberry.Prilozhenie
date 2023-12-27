import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.prilozhenie.caption'),
          title: i18n.t('forms.application.sitemap.prilozhenie.title'),
          children: [{
            link: 'i-i-s-prilozhenie-автомобиль-l',
            caption: i18n.t('forms.application.sitemap.prilozhenie.i-i-s-prilozhenie-автомобиль-l.caption'),
            title: i18n.t('forms.application.sitemap.prilozhenie.i-i-s-prilozhenie-автомобиль-l.title'),
            icon: 'tags',
            children: null
          }, {
            link: 'i-i-s-prilozhenie-парк-место-l',
            caption: i18n.t('forms.application.sitemap.prilozhenie.i-i-s-prilozhenie-парк-место-l.caption'),
            title: i18n.t('forms.application.sitemap.prilozhenie.i-i-s-prilozhenie-парк-место-l.title'),
            icon: 'phone',
            children: null
          }, {
            link: 'i-i-s-prilozhenie-парковка-l',
            caption: i18n.t('forms.application.sitemap.prilozhenie.i-i-s-prilozhenie-парковка-l.caption'),
            title: i18n.t('forms.application.sitemap.prilozhenie.i-i-s-prilozhenie-парковка-l.title'),
            icon: 'address card',
            children: null
          }, {
            link: 'i-i-s-prilozhenie-услуга-l',
            caption: i18n.t('forms.application.sitemap.prilozhenie.i-i-s-prilozhenie-услуга-l.caption'),
            title: i18n.t('forms.application.sitemap.prilozhenie.i-i-s-prilozhenie-услуга-l.title'),
            icon: 'address card',
            children: null
          }, {
            link: 'i-i-s-prilozhenie-водитель-l',
            caption: i18n.t('forms.application.sitemap.prilozhenie.i-i-s-prilozhenie-водитель-l.caption'),
            title: i18n.t('forms.application.sitemap.prilozhenie.i-i-s-prilozhenie-водитель-l.title'),
            icon: 'building',
            children: null
          }]
        }
      ]
    };
  }),
})