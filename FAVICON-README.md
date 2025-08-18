# 🎨 Generador de Favicons - Mateusz Barber

Este archivo te ayudará a generar todos los favicons necesarios para tu landing page usando la imagen del bigote.

## 📋 Pasos para generar los favicons:

### 1. **Preparar la imagen**
- Usa tu imagen del bigote (`bigote.png`)
- **Recomendado**: PNG con fondo transparente
- **Tamaño mínimo**: 512x512 píxeles
- **Formato**: PNG, JPG, JPEG o GIF

### 2. **Generar los favicons**
1. Abre el archivo `favicon-generator.html` en tu navegador
2. Arrastra tu imagen del bigote al área de subida
3. Haz clic en **"Generar Favicons"**
4. Descarga todos los favicons generados

### 3. **Colocar los archivos**
Coloca todos los favicons descargados en la carpeta `assets/` de tu proyecto:

```
assets/
├── favicon-16x16.png
├── favicon-32x32.png
├── apple-touch-icon.png
├── android-chrome-192x192.png
├── android-chrome-512x512.png
└── site.webmanifest
```

## 🎯 Tamaños generados:

| Archivo | Tamaño | Uso |
|---------|--------|-----|
| `favicon-16x16.png` | 16x16px | Favicon básico del navegador |
| `favicon-32x32.png` | 32x32px | Favicon de alta resolución |
| `apple-touch-icon.png` | 180x180px | Icono para dispositivos Apple |
| `android-chrome-192x192.png` | 192x192px | Icono para Android Chrome |
| `android-chrome-512x512.png` | 512x512px | Icono para PWA Android |

## 🚀 Beneficios del favicon personalizado:

- **✅ Identidad de marca**: Tu bigote será visible en todas las pestañas del navegador
- **✅ Profesionalismo**: Los usuarios reconocerán tu sitio al instante
- **✅ Compatibilidad móvil**: Iconos optimizados para todos los dispositivos
- **✅ PWA ready**: Preparado para instalar como aplicación móvil

## 🔧 Personalización:

Si quieres cambiar los colores del tema en el manifiesto, edita `assets/site.webmanifest`:

```json
{
  "theme_color": "#196b4d",      // Color del tema (verde Mateusz)
  "background_color": "#0a0a0a"  // Color de fondo (negro)
}
```

## 📱 Verificación:

Después de colocar los favicons:

1. **Recarga tu página** en el navegador
2. **Verifica la pestaña** - debería mostrar tu bigote
3. **Prueba en móvil** - el icono debería aparecer en la pantalla de inicio
4. **Inspecciona** - en las herramientas de desarrollador deberías ver los favicons cargándose

## 🎨 Consejos de diseño:

- **Fondo transparente**: Mejor para adaptarse a diferentes temas del navegador
- **Alto contraste**: Asegúrate de que el bigote sea visible en fondos claros y oscuros
- **Simplicidad**: En tamaños pequeños (16x16), el diseño debe ser claro y reconocible
- **Consistencia**: Mantén el mismo estilo visual que tu logo principal

---

**¡Listo! Tu landing page ahora tendrá el bigote de Mateusz como favicon en todas las pestañas del navegador.** 🎉
