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
Similarity http://robokop.renci.org/api/simple/similarity/ Performs a Jaccard similarity search in the ROBOKOPKG, where similarity is calculated over shared nodes. Returns the most similar nodes, along with their similarity scores.  A notebook describing its use is at https://github.com/ncats/translator-workflows/blob/master/greengamma/general/Similarity.ipynb and a form-based submission is at http://robokop.renci.org/simple/similarity

## Knowledge Sources

- OmniCorp http://stars-app.renci.org/pubmedgraph/sparql is an RDF graph associating ontology terms with pubmed ids in which 
- UberonGraph http://stars-app.renci.org/uberongraph/sparql 

## ROBOKOP Automated Workflows and Modules
- COP Disease 
- COP Phenotype
- Drug Repurposing By Gene
- WF1 Mod1
- WF1 Mod1 With Gene
- WF1 Mod1 With Process
- WF1 Mod2 Direct
- WF1 Mod2 Expanded
- WF1 Mod2 Relevant Expanded
- WF1 Mod3
- WF1 Mod3_v2
- WF2 Mod1a
- WF2 Mod1d
- WF2 Mod2
- WF4
- WF4 Phenotype
- WF5

