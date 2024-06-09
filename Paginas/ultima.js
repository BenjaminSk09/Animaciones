 // Efecto 1: Transición de Opacidad
 gsap.to("#box1", { duration: 1, opacity: 0.2, repeat: -1, yoyo: true });

 // Efecto 2: Animación de Desplazamiento
 gsap.to("#box2", { duration: 1, x: 200, repeat: -1, yoyo: true });

 // Efecto 3: Transformación de Escala
 gsap.to("#box3", { duration: 1, scale: 1.5, repeat: -1, yoyo: true });

 // Efecto 4: Animación de Rotación
 gsap.to("#box4", { duration: 1, rotation: 360, repeat: -1, ease: "none" });

 // Efecto 5: Animación de Cambio de Color
 gsap.to("#box5", { duration: 1, backgroundColor: "#e74c3c", repeat: -1, yoyo: true });