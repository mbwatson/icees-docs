---
path: "/apps/robokop"
title: "ROBOKOP and ROBOKOP KG"
seo:
    title: "ROBOKOP"
    keywords: ""
    description: ""
---
## ROBOKOP

## Overview

[**ROBOKOP**](http://robokop.renci.org/) (**R**easoning **O**ver **B**iomedical **O**bjects linked in **K**nowledge **O**riented **P**athways) is an open question-answering system, built upon multiple open biomedical databases and designed to explore relationships between a variety of biomedical data types. [RENCI](https://renci.org/) and collaborators at CoVar Applied Technologies developed ROBOKOP as part of the Translator program. With ROBOKOP, varied biomedical data are semantically integrated into a Knowledge Graph (KG) that provides access to high-level concepts connected by Knowledge Sources. Nodes in the graph represent entities such as chemical substance, gene, biological pathway or process, cell type, anatomical structure or system, and disease. Edges between nodes provide predicates that explain the association between the connected nodes; the predicates include concepts such as “treats”, “causes”, or “is associated with”. Edges also provide publication support for connections between nodes, i.e., co-occurrence of terms in PubMed abstracts. Using a structured query language, users posit questions, such as: “Why does imatinib help people with asthma?” “Why does clonidine interact with propranolol?” “Why is sickle cell disease protective against malaria?” ROBOKOP then locates applicable answer subgraphs in its KG and scores these putative answers, allowing users to view the results and supporting evidence (i.e., PubMed literature citations).

The ROBOKOP KG contains approximately 500,000 nodes (entities) and 12M edges (relationships).  A publicly available version of the database can be accessed at http://robokopkg.renci.org. A simplified version of the KG schema is shown below. An edge connecting two entities means that one or more data sources connecting entities of those types has been integrated into the ROBOKOP KG.

![ROBOKOP_KG_DatabaseSchema](ROBOKOP_KG_DatabaseSchema.png)

## User Manual

To get started with ROBOKOP, begin with the documentation that is available on the home page of the UI.

![ROBOKOP UI](ROBOKOP_UI.png)

ROBOKOP allows users to browse existing questions and answer sets or posit new questions to create new answer sets. Follow the UI step-by-step examples below for a demonstration.

![Search existing ROBOKOP questions](SearchQuestions.png)

![Create new questions using the question templates](QuestionTemplate.png)

![Question template input](QuestionTemplateInput.png)

![Modify template](ModifyTemplate.png)

![Modify template](ModifyTemplate2.png)

![Name modified question and submit request for answers](NameSubmit.png)

### ROBOKOP Queries for COPs

ROBOKOP can respond to arbitrary graph queries across biomedical topics. Of specific relevance to the proposed work, ROBOKOP is being used to explore a variety of COPs and AOPs. [Aside: ROBOKOP’s ability to generate comprehensive COPs using a KG-based system was one of several criteria for the Translator award. Of note, this capability was developed and a prototype was released in less than six months.] For example, ROBOKOP was used to generate a COP designed to investigate the MOA of nifedipine in the treatment of cardiovascular disease. This question was posed to ROBOKOP as a graph query finding a linear path starting at nifedipine and ending at cardiovascular disease, and traversing a specified set of node types in between:

<p style="text-align: center;">
    nifedipine ⇨ gene ⇨ *biological process or activity ⇨ *phenotypic feature ⇨ cardiovascular disease.
</p>

The stars indicate that for these entities, the path is allowed to branch, so that, e.g., multiple phenotypes may be involved.

![COP nifedipine to cardiovascular disease](kg-response.png)[]()

As seen in the screenshot above, multiple answers, representing different paths through the KG are returned. These potential answers are scored and ranked through an algorithm that factors in the number of supporting PubMed publications, as well as indirect support provided by literature co-occurrence of all pairwise sets of terms in the path. The top answer for this COP is shown below.

![Subgraph for COP nifedipine to cardiovascular disease](supporting-publications-graph.png)[]()

Users can interact with the graph and explore the supporting publications. In this case, ROBOKOP identified 37 PubMed articles as supporting evidence for the nifedipine -> CYP1A relationship in the first answer subgraph. (One additional article was provided from the underlying data source, in this case CTD.) Users can view the citations (the first one is shown below) and click on the button to the left of the reference to retrieve the full PubMed abstract.

![Subgraph and supporting publications for nifedipine and the CYP1A1 gene](cyp1a1-interaction-with-nifedipine.png)[]()

### ROBOKOP Queries for AOPs

Similarly, ROBOKOP can be used to generate AOPs. The example below shows an AOP for the negative effects of particulate matter on cardiovascular disease.

![AOP particulate matter to cardiovascular disease](ROBOKOP_AOP_screenshot.png)[]()

The top answer subgraph for this AOP is shown below. In this example, ROBOKOP established a relationship between particulate matter and the TNF gene, with 47 total supporting PubMed publications and predicates that include “increases secretion”, “increases expression”, and “affects response”. In this answer subgraph, the supporting publications were derived from CTD.

![Subgraph and supporting publications for particulate matter and the TNF gene](ROBOKOP_AOP2_screenshot.png)[]()

The first citation for the relationship

<p style="text-align: center;">nifedipine ⇨ increases secretion of ⇨ TNF</p>

is shown below.

![First supporting publication for particulate matter and the TNF gene](particulate-matter-increases-secretion-tnf.png)[]()

### Direct Cypher Queries of ROBOKOP KG

The ROBOKOP KG also can be queried directly using cypher queries.

*Example 1.* Graphical representation of a simple cypher query of the ROBOKOP KG. Simple linear queries, with one or more interior nodes, are a common use case for ROBOKOP KG. An example “two-hop” cypher query of the ROBOKOP KG asks: what cells are part of the brain and are related to the biological process of thyroid stimulating hormone secretion? The query itself is structured as a linear chain as follows:
anatomical entity (brain) – cell – biological process or activity (thyroid stimulating hormone secretion)

![Graphical representation of simple linear query of ROBOKOP KG](ROBOKOP_KG_SimpleQuery.png)[]()

*Example 2.* Graphical representation of a complex cypher query of the ROBOKOP KG. This query searches for potential treatments for IBS by looking for drugs that act on disease-related genes in a manner that is opposite to that of disease-contributing chemical substances. (The cypher query can be found in the user guide available at robokopkg.renci.org.)

![Graphical representation of complex query on IBS](ROBOKOP_KG_ComplexQuery.png)[]()

*Example 3.* Graphical representation of a complex cypher query of the ROBOKOP KG. The query looks for putative rare disease treatments among treatments for biologically-related common diseases, i.e., common diseases that share both a gene and a biological process with the input rare disease. (The cypher query can be found in the user guide available at robokopkg.renci.org.)

![Graphical representation of complex query on chronic granulomatosis](ROBOKOP_KG_ComplexQuery2.png)[]()



