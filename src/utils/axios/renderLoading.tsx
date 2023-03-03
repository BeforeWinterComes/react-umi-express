import ReactDOM from "react-dom";

import PageLoading from "@/components/PageLoading";

const collectors = new Map<string, string>();

const showLoading = (url: string) => {
  if (collectors.size === 0) {
    ReactDOM.render(<PageLoading />, document.getElementById("page-loading"));
  }
  collectors.set(url, url);
};

const clearLoading = (url: string) => {
  if (url && collectors.has(url)) {
    collectors.delete(url);
  }

  if (collectors.size === 0) {
    ReactDOM.unmountComponentAtNode(
      document.getElementById("page-loading") as HTMLDivElement
    );
  }
};

window.showLoading = showLoading;
window.clearLoading = clearLoading;

export { showLoading, clearLoading };
