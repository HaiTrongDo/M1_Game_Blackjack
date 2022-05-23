new Vue({
  el: '#app',
  vuetify: new Vuetify(),
  data() {
    return {
      drawer: null,
      items: [
      { title: 'Dashboard', icon: 'mdi-view-dashboard' },
      { title: 'Query Data', icon: 'mdi-image' },
      { title: 'Results', icon: 'mdi-help-box' },
      { title: 'Settings', icon: 'mdi-settings-box' },
      { divider: true },
      { title: 'User Admin', icon: 'mdi-account-settings' },
      { title: 'Event Admin', icon: 'mdi-calendar-text' },
      { title: 'Geography Admin', icon: 'mdi-web' },
      { title: 'Category Admin', icon: 'mdi-notification-clear-all' }],

      right: null };

  } });