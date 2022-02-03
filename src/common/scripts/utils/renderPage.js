export default function renderPage(query, block) {
    const root = document.querySelector(query);
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