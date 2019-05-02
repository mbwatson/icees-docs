---
path: "/tranql"
title: "TranQL"
seo:
    title: "TranQL"
    keywords: ""
    description: ""
template: "product"
image: "./tranql.jpg"
---

TranQL supports the interactive query of Translator reasoners. Its simple user interface accepts a query in the TranQL query language. Running the query interacts with one or more reasoners to build and visualize a resulting knowledge graph.

The first thing to do is to create a query.

The query editor supports automatic command completion for keywords and for concepts and relations in the biolink-model. In the figure, the user has entered Control-Space to find terms that begin with “chemical_”. A drop down shows all available options. The up and down arrows can be used to navigate the list.

Each query selects a graph made up of concepts and relationships between them. The query’s from clause specifies a web service that will be called to satisfy the query. Queries can also contain where clauses that refine the search by specifying values for the concepts and relations. TranQL interprets these elements to build a request to a service supporting the Translator Knowledge Graph Standard (KGS) graph query API.

Running a query can take a long time. A busy indicator will display while the query is executing. If successful, a knowledge graph will be rendered.
