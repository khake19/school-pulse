### 🧩 Replacing `react-select` with `Downshift`

**Reason for Change**  
The `react-select` library added approximately **35KB** (gzipped) to the bundle size. While feature-rich, it was heavier than necessary for the use case.

To improve performance and bundle efficiency, `Downshift` was chosen as a replacement. It offers a **lighter footprint**, greater **customizability**, and built-in **accessibility** support.

**Integration with Chakra UI**  
`Downshift` was paired with **Chakra UI components** to handle styling and layout. This allowed for a more **consistent design system** while maintaining a high degree of control over the component's behavior and rendering.

**Benefits Gained**
- Reduced bundle size
- Better performance on slower networks and devices
- Full control over dropdown behavior and appearance
- Improved accessibility (keyboard and screen reader support)

**Status**: ✅ Implemented and used in the filters UI
