// import { createRoot } from "react-dom/client";

// import PageLoading from "@/components/PageLoading";

// const collectors = new Map<string, string>();

// const PageLoadingContainer = document.createElement("div");
// PageLoadingContainer.id = "page-loading";
// document.body.append(PageLoadingContainer);

// const container = document?.getElementById("page-loading") as HTMLElement;
// const root = createRoot(container);

// const showLoading = (url: string) => {
//   if (collectors.size === 0) {
//     root.render(<PageLoading />);
//   }
//   collectors.set(url, url);
// };

// const clearLoading = (url: string) => {
//   if (url && collectors.has(url)) {
//     collectors.delete(url);
//   }

//   if (collectors.size === 0) {
//     root.unmount();
//   }
// };

// window.showLoading = showLoading;
// window.clearLoading = clearLoading;

// export { showLoading, clearLoading };
