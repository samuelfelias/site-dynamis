// Elementos DOM
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
const videoPlaceholders = document.querySelectorAll('.video-placeholder');
const modal = document.getElementById('videoModal');
const videoPlayer = document.getElementById('videoPlayer');
const closeModal = document.querySelector('.close-modal');
const header = document.querySelector('.header');
const contactForm = document.getElementById('contactForm');

// Toggle menu para dispositivos móveis
menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Fechar menu ao clicar em um link
document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
    });
});

// Abrir modal de vídeo ao clicar no placeholder
videoPlaceholders.forEach(placeholder => {
    placeholder.addEventListener('click', () => {
        const videoSrc = placeholder.getAttribute('data-video');
        videoPlayer.src = `videos/${videoSrc}`;
        modal.style.display = 'block';
        videoPlayer.play();
    });
});

// Fechar modal
closeModal.addEventListener('click', () => {
    videoPlayer.pause();
    videoPlayer.src = '';
    modal.style.display = 'none';
});

// Fechar modal ao clicar fora do conteúdo
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        videoPlayer.pause();
        videoPlayer.src = '';
        modal.style.display = 'none';
    }
});

// Efeito de scroll no header
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.padding = '10px 0';
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.padding = '15px 0';
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// Animação de scroll suave para links de âncora
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
        });
    });
});

// Manipulação do formulário de contato
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Aqui você adicionaria a lógica para enviar o formulário
        // Por exemplo, usando fetch para enviar os dados para um servidor
        
        // Simulação de envio bem-sucedido
        alert('Mensagem enviada com sucesso! Obrigado pelo contato.');
        contactForm.reset();
    });
}

// Animação de elementos ao fazer scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.section-header, .testimonial-card, .gallery-item, .about-content');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.classList.add('animate');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Preloader
window.addEventListener('load', () => {
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 500);
});