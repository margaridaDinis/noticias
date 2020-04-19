import { XmlEntities } from 'html-entities';
import { SPLIT_SEPARATOR } from '../constants/Country';

const entities = new XmlEntities();

export default function parseNewsDetails(item, country) {
  const [_, text = ''] = item.description.split(SPLIT_SEPARATOR[country]);
  const title = entities.decode(item.title.trim());
  const description = entities.decode(text.trim());
  const categories = item.categories.map(({ name }) => name);
  const published = new Date(item.published).toLocaleString();
  const url = item.links[0].url;

  return { ...item, title, description, categories, published, url };
}
