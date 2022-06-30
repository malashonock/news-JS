import Source from '../../model/Source';
import './sources.css';

class Sources {
    draw(sources: Source[]) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

        sources.forEach((source) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLElement;

            const sourceItem = sourceClone.querySelector<HTMLElement>('.source__item');
            sourceItem?.setAttribute('data-source-id', source.id || '');

            const sourceItemName = sourceClone.querySelector<HTMLElement>('.source__item-name');
            if (sourceItemName) {
                sourceItemName.textContent = source.name;
            }

            fragment.append(sourceClone);
        });

        const sourcesWrapper = document.querySelector<HTMLElement>('.sources')
        if (sourcesWrapper) {
            sourcesWrapper.innerHTML = '';
            sourcesWrapper.append(fragment);
        }
    }
}

export default Sources;
