<!-- src/components/AppImage.vue -->
<script setup>
const props = defineProps({
  // ruta relativa dentro de assets/images, p.ej. 'history/forro-couple.jpg'
  name: { type: String, required: true },
  alt: { type: String, default: "" },
  sizes: { type: String, default: "100vw" },
  eager: { type: Boolean, default: false },
});

// UN solo glob para toda la carpeta; Vite lo tree-shakea por uso
const modules = import.meta.glob("/src/assets/images/**/*.{jpg,jpeg,png}", {
  query: "?w=480;768;1024;1440;1920;2560&format=webp;jpg&as=picture",
  import: "default",
  eager: true,
});

const picToShow = modules[`/src/assets/images/${props.name}`];

if (!picToShow && import.meta.env.DEV) {
  console.warn(`[AppImage] no encontrada: ${props.name}`);
}
</script>

<template>
  <picture v-if="picToShow">
    <source
      v-for="(srcset, type) in picToShow.sources"
      :key="type"
      :srcset="srcset"
      :type="type"
      :sizes="sizes"
    />
    <img
      :src="picToShow.img.src"
      :width="picToShow.img.w"
      :height="picToShow.img.h"
      :alt="alt"
      :sizes="sizes"
      :loading="eager ? 'eager' : 'lazy'"
      :fetchpriority="eager ? 'high' : 'auto'"
      decoding="async"
    />
  </picture>
</template>
