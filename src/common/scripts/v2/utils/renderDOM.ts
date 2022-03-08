export default function render(query: string, block: any) {

	const root = document.querySelector(query);

	if(root)
		root.appendChild(block.getContent());

        block.dispatchComponentDidMount();

	return root;
}