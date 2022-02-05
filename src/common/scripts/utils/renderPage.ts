export default function renderPage(query: string, block: any) {
    const root: any = document.querySelector(query);
    root.appendChild(block.getContent());

    const handlers = block.getHandlers();
	if (handlers) {
		Object.values(handlers).forEach((handler) => {
			if (typeof handler === 'function') {
				handler();
			};
		});
	};
    return root;
};