---
path: "/tranql-workflow-5"
title: "TranQL - Workflow 5"
seo:
    title: "TranQL - Workflow 5"
    keywords: ""
    description: ""
---

**Clinical Query**: The previous example queried a single service. In this example, we create a query that must span services. The first portion of the query graph relates a population of individual organisms to a drug exposure. The ICEES clinical reasoner provides data linking these concepts. Given a drug exposure concept, the rest of the query navigates through biologial process to phenotypic feature. This second set of connections is provided by the Robokop ontological reasoner.

**Schema**: TranQL’s configuration models the schema of multiple reasoners. Robokop exports its schema as a hierarchy of biolink-model elements detailing the transitions it supports. Importing this kind of information about each configured reasoner allows the TranQL query planner to compare each link in a question graph to knowledge links provided by each of the constituent schemas. In this case, it creates a plan that goes to ICEES for the first segment of the question, then hands off the results to the second segment which it sends to Robokop. Consulting the schema is triggered by specifying “/schema” in the from clause.

**Options**: The KGS standard API contains a Message object with several parts. One is a list of optional values. The elements of the where clause prefixed with “icees” in the example will be sent as options in the KGS query to ICEES.

**Filters**: The final component of the where clause is a regular expression based filter. The “!=~” operator essentially means “does not match”. In this context, by applying it to the drug_exposure element, we’re instructing the query to eliminate any drug exposure results whose identifiers contain the specified components. We’re doing this because ICEES returns many results with identifiers that can’t be processed by downstream services. To accelerate the query, we skip handling them.
