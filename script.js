//navegação por tabs
function initTabNav() {
    //selecionando todas as imagens da lista de animais
    const tabMenu = document.querySelectorAll('.js-tabmenu li');
    //selecionando todos os textos de cada animal
    const tabContent = document.querySelectorAll('.js-tabcontent section');
    if (tabMenu.length && tabContent.length) {
        //para aparecer o primeiro texto já com a class ativo
        tabContent[0].classList.add('ativo');
        //para adicionar a classe ativo em um dos textos dos animais quando for "requerido" e tirar quando for posta em outro texto
        function activeTab(index) {
            tabContent.forEach((section) => {
                section.classList.remove('ativo');
            });
            tabContent[index].classList.add('ativo');
        }
        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', function() {
                activeTab(index);
            })
        });
    }
}
initTabNav();
//seleciona todos os dt's de faq
const accordionList = document.querySelectorAll('.js-accordion dt');
const activeClass = 'ativo';

//para iniciar o site já com os primeiros elementos dt e dd ativo
accordionList[0].classList.add(activeClass);
accordionList[0].nextElementSibling.classList.add(activeClass);

function activeAccordion(event) {
    this.classList.toggle(activeClass);
    this.nextElementSibling.classList.toggle(activeClass);
}
accordionList.forEach((item) => {
    item.addEventListener('click', activeAccordion);
})

function initScrollSuave() {
    //links internos
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

    //para selecionar a seção de cada item do menu
    function scrollToSection(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);
        const topo = section.offsetTop;

        //para clicar um link interno no menu e ir até o parte dele na página
        //não precisa ver o topo fazendo assim, mas só funciona no chrome e firefox
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });

        //opções de scroll. para  scroll ser suave até chegar no lugar que foi clicado no menu
        //forma alternativa
        /*window.scrollTo({
            top: topo,
            behavior: 'smooth',
        });*/
    }
    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollToSection);
    });
}
initScrollSuave();

function initAnimacaoScroll() {
    //para animar as seções do site,saindo do lado esquerdo para a posição final
    const sections = document.querySelectorAll('.js-scroll');
    if (sections.length) {
        //para a animação começar quando estiver em 60% do total da página
        const windowMetade = window.innerHeight * 0.6;

        function animaScroll() {
            sections.forEach((section) => {
                //verifica a altura da seção em relação ao topo da página
                const sectionTop = section.getBoundingClientRect().top;
                //já calcula a posiçao de section em relação ao total da página quando passsa de -0 e retorna true
                const isSectionVisible = (sectionTop - windowMetade) < 0;
                //verifica se passou do topo, ou seja, se ficou -0
                if (isSectionVisible) {
                    section.classList.add('ativo');
                } else
                    section.classList.remove('ativo');
            });
        }
    }
    animaScroll();
    window.addEventListener('scroll', animaScroll);
}
initAnimacaoScroll();