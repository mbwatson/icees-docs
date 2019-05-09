---
path: "/apis"
title: "APIs"
seo:
    title: "Data Translator APIs"
    keywords: ""
    description: ""
---

## ROBOKOP Reasoner APIs

- Query http://robokop.renci.org:6011/api/query is the v0.9 Reasoner API compliant interface to the ROBOKOP Reasoner. Users can post arbitrary graph-type machine questions and receive ranked answers matching the query. NB: the query API is currently internal only and not publicly exposed.
- Quick http://robokop.renci.org/api/simple/quick/ is an enhanced version of the v0.9 API to ROBOKOP. It allows users to post compliant questions and answers, and also allows access to ROBOKOP-specific parameters such as max_connectivity. This allows arbitrary questions to be posted and scored, replicating the full functionality of the ROBOKOP application via an API call. A notebook describing the use of quick can be found at https://github.com/ncats/translator-workflows/blob/master/greengamma/general/Quick.ipynb 
- Expand http://robokop.renci.org/api/simple/expand/  is a pared down interface that allows users to post simple one-hop queries to ROBOKOP and received ranked results in the Reasoner API compliant output format.  Users can control returned types, predicates, and edge directionality. A notebook detailing the use of expand can be found at https://github.com/ncats/translator-workflows/blob/master/greengamma/general/Expand.ipynb

## Utilities

- ROBOKOP View http://robokop.renci.org/api/simple/view/ The ROBOKOP UI can be used to view the response from any Reasoner API compliant service. Users post the response to this service, and it returns a URL that can be browsed to use the UI. A python function for posting calls to this service can be found in https://github.com/ncats/translator-workflows/blob/master/greengamma/gg_functions.py
- Annotate http://robokop.renci.org:6011/api/multinode_lookup Nodes in ROBOKOP KG contain numerous properties from different data sources. For instance, chemicals contain a set of properties describing the structure and biological role of the chemical. The annotate service takes a list of identifiers and returns the structured ROBOKOP KG nodes for those identifiers, which includes all of their properties. A notebook explaining the user of the annotate service can be found at https://github.com/ncats/translator-workflows/blob/master/greengamma/general/Annotate.ipynb
- Synonymize http://robokop.renci.org:6010/api/synonymize The same entity may have many different names in different naming systems. The synonymize API takes an identifier, and returns all of the other identifiers by which that entity is known, as well as the identifier by which that entity is known in ROBOKOP. A notebook describing the use of the synonymize API is found at https://github.com/ncats/translator-workflows/blob/master/greengamma/general/Synonymize.ipynb  The synonymize service can also be accessed via the form-based user interface at: http://robokop.renci.org/simple/synonymize
- Validate http://robokop.renci.org:7071/validate_message The validate service checks a message for compliance to the Reasoner API v0.9 spec.  It is one of many validation-related endpoints that are described at http://robokop.renci.org:7071/apidocs/
- Transpiler : Transpiles a question graph in the Reasoner API spec into a cypher query and returns that query.
- Bionames https://bionames.renci.org/ The bionames service takes human readable names and returns possible identifiers from a set of vocabularies. Apidocs for bionames can be found at https://bionames.renci.org/apidocs/
- Onto https://onto.renci.org/ Onto is a set of services for searching and traversing a set of pre-loaded bio-ontologies including GO, MONDO, and HPO. The apidocs for onto can be located at  https://onto.renci.org/apidocs/
ROBOKOP KG Analysis Tools
- Enrichment http://robokop.renci.org/api/simple/enriched/ Performs GO-style enrichment on entities in the ROBOKOP KG.  Takes a list of entities of one type, and returns a list of entities that connect to the input more frequently than would be expected by chance. A notebook describing use of the enrichment service is at https://github.com/ncats/translator-workflows/blob/master/greengamma/general/Enrichment.ipynb and a form-based submission for the service is located at http://robokop.renci.org/simple/enriched
- Similarity http://robokop.renci.org/api/simple/similarity/ Performs a Jaccard similarity search in the ROBOKOPKG, where similarity is calculated over shared nodes. Returns the most similar nodes, along with their similarity scores.  A notebook describing its use is at https://github.com/ncats/translator-workflows/blob/master/greengamma/general/Similarity.ipynb and a form-based submission is at http://robokop.renci.org/simple/similarity

## Knowledge Sources

- OmniCorp http://stars-app.renci.org/pubmedgraph/sparql is an RDF graph associating ontology terms with pubmed ids.   This allows users to find articles related to particular terms, as well as to perform literature co-occurence calculations.
- UberonGraph http://stars-app.renci.org/uberongraph/sparql is an RDF graph created by combining numerous community bio-ontologies, including GO, UBERON, CHEBI, RO, and others.  Reasoning is then applied to the integrated information to infer and materialize relationships between entities.
- CTD https://ctdapi.renci.org is a [SmartBag]() enabled API allowing access to the [Comparative Toxicogenomics Database](http://ctdbase.org).  [SmartAPI Docs]().

## ROBOKOP Automated Workflows and Modules
- COP Chemical to Disease [API](http://robokop.renci.org/api/simple/quick/template/cop_disease/) | [Notebook example](https://github.com/ncats/translator-workflows/blob/master/greengamma/examples/COP.ipynb): Construct a Clinical Outcome Pathway starting at a chemical and ending at a disease.
- COP Chemial to Phenotype [API](http://robokop.renci.org/api/simple/quick/template/cop_phenotype/) | [Notebook example](https://github.com/ncats/translator-workflows/blob/master/greengamma/examples/COP_phenotype.ipynb): Construct a Clincal Outcome Pathway starting at a chemical and ending at a phenotypic feature.
- Drug Repurposing By Gene [API](http://robokop.renci.org/api/simple/quick/template/repurposing_by_gene/) | [Notebook example](https://github.com/ncats/translator-workflows/blob/master/greengamma/examples/repurposing_by_gene.ipynb): Given a disease, find a disease that shares genetics with the input disease, and for which there is a chemical that 1) treats the output disease and 2) is related to the shared gene.
- WF1 Mod1 [API](http://robokop.renci.org/api/simple/quick/template/wf1mod1/) | [Notebook example](https://github.com/ncats/translator-workflows/blob/master/greengamma/workflow1/module1/module/Workflow1Module1_ROBOKOP_examples.ipynb):  Find a genetic condition that shares one or more phenotypic features with the input disease.
- WF1 Mod1 With Gene [API](http://robokop.renci.org/api/simple/quick/template/wf1mod1_with_gene/) | [Notebook example](https://github.com/ncats/translator-workflows/blob/master/greengamma/workflow1/module1/module/Workflow1Module1_ROBOKOP_gene_examples.ipynb): Find a genetic condition that shares one or more phenotypic features and one or more genes with the input disease.
- WF1 Mod1 With Process [API](http://robokop.renci.org/api/simple/quick/template/wf1mod1_with_process/) | [Notebook example](https://github.com/ncats/translator-workflows/blob/master/greengamma/workflow1/module1/module/Workflow1Module1_ROBOKOP_examples.ipynb): Find a genetic condition that shares one or more phenotypic features and one or more biological process with the input disease.
- WF1 Mod2 Direct [API](http://robokop.renci.org/api/simple/quick/template/wf1mod2_direct) | [Notebook example](https://github.com/ncats/translator-workflows/blob/master/greengamma/workflow1/module2/module/Workflow1Module2_ROBOKOP_examples.ipynb): Given a disease, find genes associated with the disease, and drugs that interact with the gene.
- WF1 Mod2 Expanded [API](http://robokop.renci.org/api/simple/quick/template/wf1mod2_expanded) | [Notebook example](https://github.com/ncats/translator-workflows/blob/master/greengamma/workflow1/module2/module/Workflow1Module2_expanded_ROBOKOP_examples.ipynb): Given a disease, find genes associated with the disease, expand via shared processes to new genes, and to drugs that interact with these new genes.
- WF1 Mod2 Relevant Expanded [API](http://robokop.renci.org/api/simple/quick/template/wf1mod2_relevant_expanded) | [Notebook example](https://github.com/ncats/translator-workflows/blob/master/greengamma/workflow1/module2/module/Workflow1Module2_relevant_expanded_ROBOKOP_examples.ipynb):  Given a disease, find genes associated with the disease, expand via shared processes to new genes, and to drugs that interact with these new genes.  In this case, the process used to perform the gene expansion must also have a known relationship to the input disease.
- WF1 Mod3 [API](http://robokop.renci.org/api/simple/quick/template/wf1mod3) | [Notebook example](https://github.com/ncats/translator-workflows/blob/master/greengamma/workflow1/module2/module/Workflow1Module3_ROBOKOP_examples.ipynb):  Given an input disease, find toxicants that may cause or exacerbate the disease, find genes that produce or retain the toxicant, and then find drugs that reduce the activity or amount of that gene.
- WF1 Mod3a [API](http://robokop.renci.org/api/simple/quick/template/wf1mod3_v2) | [Notebook example](https://github.com/ncats/translator-workflows/blob/master/greengamma/workflow1/module2/module/Workflow1Module3a_ROBOKOP_examples.ipynb):  Given an input disease, find toxicants that may cause or exacerbate the disease, find genes that degrade or remove the toxicant, and then find drugs that increase the activity or amount of that gene.
- WF2 Mod1a [API](http://robokop.renci.org/api/simple/quick/template/wf2mod1a) |  [Notebook example](https://github.com/ncats/translator-workflows/blob/master/greengamma/workflow2/module1/Workflow2Module1a_ROBOKOP_examples.ipynb): Given a disease, find genes associated with that disease, and then look for new genes that share many biological processes with the disease gene.  This uses ROBOKOP reasoning, rather than Jaccard similarity.
- WF2 Mod1d
- WF2 Mod2
- WF4
- WF4 Phenotype
- WF5

