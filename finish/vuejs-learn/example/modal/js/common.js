Vue.component('modal', {
        template: '#modal-template',
        props: {
            show: {
                type: Boolean,
                required: true,
                twoWay: true
            }
        }
    })



var modal = new Vue({
    el: '#app',
    data: {
        showModal: false
    }
});
