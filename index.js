const tabs = document.querySelectorAll('.tab-btn');
const contents = document.querySelectorAll('.tab-content')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = tab.getAttribute('data-tab');
        tabs.forEach(t => t.classList.remove('active'));
        contents.forEach(c => c.classList.remove('active'));

        tab.forEach.add('active');
        document.getElementById(target).classList.add('active')
    })
})
