import { BRAZIL, PORTUGAL } from './Country';

const PORTUGAL_RSS_URL = 'https://www.rtp.pt/noticias/rss';
const PORTUGAL_RSS_URL_LIST = [
  { id: 'pt_1', name: 'Últimas', url: `${PORTUGAL_RSS_URL}` },
  { id: 'pt_2', name: 'País', url: `${PORTUGAL_RSS_URL}/pais` },
  { id: 'pt_3', name: 'Covid-19', url: `${PORTUGAL_RSS_URL}/covid-19` },
  { id: 'pt_4', name: 'Mundo', url: `${PORTUGAL_RSS_URL}/mundo` },
  { id: 'pt_5', name: 'Desporto', url: `${PORTUGAL_RSS_URL}/desporto` },
  { id: 'pt_6', name: 'Economia', url: `${PORTUGAL_RSS_URL}/economia` },
  { id: 'pt_7', name: 'Cultura', url: `${PORTUGAL_RSS_URL}/cultura` },
  { id: 'pt_8', name: 'Vídeos', url: `${PORTUGAL_RSS_URL}/videos` },
  { id: 'pt_9', name: 'Áudios', url: `${PORTUGAL_RSS_URL}/audios` }
];

const BRAZIL_RSS_URL = 'http://g1.globo.com/dynamo/';
const BRAZIL_RSS_URL_LIST = [
  { id: 'br_1', name: 'Brasil', url: `${BRAZIL_RSS_URL}/brasil/rss2.xml` },
  { id: 'br_2', name: 'Carros (Autoesporte.com)', url: `${BRAZIL_RSS_URL}/carros/rss2.xml` },
  { id: 'br_3', name: 'Ciência e Saúde', url: `${BRAZIL_RSS_URL}/ciencia-e-saude/rss2.xml` },
  { id: 'br_4', name: 'Concursos e Emprego', url: `${BRAZIL_RSS_URL}/concursos-e-emprego/rss2.xml` },
  { id: 'br_5', name: 'Economia', url: `${BRAZIL_RSS_URL}/economia/rss2.xml` },
  { id: 'br_6', name: 'Educação', url: `${BRAZIL_RSS_URL}/educacao/rss2.xml` },
  { id: 'br_7', name: 'Loterias', url: `${BRAZIL_RSS_URL}/loterias/rss2.xml` },
  { id: 'br_8', name: 'Mundo', url: `${BRAZIL_RSS_URL}/mundo/rss2.xml` },
  { id: 'br_9', name: 'Música', url: `${BRAZIL_RSS_URL}/musica/rss2.xml` },
  { id: 'br_10', name: 'Natureza', url: `${BRAZIL_RSS_URL}/natureza/rss2.xml` },
  { id: 'br_11', name: 'Planeta Bizarro', url: `${BRAZIL_RSS_URL}/planeta-bizarro/rss2.xml` },
  { id: 'br_12', name: 'Política', url: `${BRAZIL_RSS_URL}/politica/mensalao/rss2.xml` },
  { id: 'br_13', name: 'Pop & Arte', url: `${BRAZIL_RSS_URL}/pop-arte/rss2.xml` },
  { id: 'br_14', name: 'Tecnologia e Games', url: `${BRAZIL_RSS_URL}/tecnologia/rss2.xml` },
  { id: 'br_15', name: 'Turismo e Viagem', url: `${BRAZIL_RSS_URL}/turismo-e-viagem/rss2.xml` }
];

export const RSS_URL_PER_COUNTRY = {
  [PORTUGAL]: PORTUGAL_RSS_URL_LIST,
  [BRAZIL]: BRAZIL_RSS_URL_LIST
};

export const sections = [
  { title: 'RTP', data: RSS_URL_PER_COUNTRY[PORTUGAL], country: PORTUGAL },
  { title: 'Globo', data: RSS_URL_PER_COUNTRY[BRAZIL], country: BRAZIL }
];
