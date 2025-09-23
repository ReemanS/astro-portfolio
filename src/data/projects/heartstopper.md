---
title: "Heartstopper"
description: "A simple but effective jumpscare webpage built with React"
date: "2023-07-03"
technologies: ["JavaScript", "React", "HTML", "CSS"]
links:
  github: "https://github.com/ReemanS/heartstopper"
  live: "https://reemans.github.io/heartstopper"
featured: false
thumbnail: "/project-media/heartstopper-img.webp"
heroImg: "/project-media/heartstopper-img.webp"
---

Who says web development can't be a little spooky? 😈

Heartstopper is exactly what it sounds like: a web page designed to give unsuspecting visitors a good old-fashioned jumpscare.

I had way too much fun building this little project. The technical aspects aren't particularly complex, but the devil is in the details - getting the timing just right, making sure the audio syncs perfectly with the visuals, and ensuring it works across different browsers.

Even the code has some spooky elements baked in:

```jsx
return (
    <Particles
      ...
      options={{
        fullScreen: {
          value: true,
          zIndex: -66,
        },
        particles: {
          number: {
            value: 66,
            density: {
              enable: true,
              value_area: 6666,
            },
          },
          ...
          opacity: {
            value: 0.66,
            random: false,
            anim: {
              enable: false,
              speed: 0.6,
              opacity_min: 0.1,
              sync: false
            },
            ...
            bubble: {
              distance: 666,
              size: 66,
              duration: 6,
              opacity: 6,
              speed: 6,
            },
            repulse: {
              distance: 666,
              duration: 0.66,
            },
            push: {
              particles_nb: 6,
            },
            remove: {
              particles_nb: 0.66,
            },
        ...

```

Pro tip: Don't send this link to people with heart conditions! 😅
