---
path: "/apps/icees"
title: "ICEES"
seo:
    title: "ICEES"
    keywords: ""
    description: ""
---

## Overview
[**ICEES**](https://icees.renci.org/apidocs/)

Access to clinical data is critical for the advancement of translational research and the success of the Translator program. Yet, the many regulations that surround the use of clinical data, while critical to ensure and respect patient privacy, often hinder access to clinical data for research purposes. Moreover, the ability to share clinical data across institutions is central to open team science and the success of multi-institutional consortia such as The Biomedical Data Translator Consortium. One of the goals of the Translator program is to find novel ways to openly share computable data, including sensitive clinical data, and allow its integration in surprising ways (Ahalt et al., in press at CTS).


For example, [RENCI](https://renci.org/) and colleagues at the North Carolina Translational and Clinical Sciences Institute developed a novel approach for openly exposing clinical data on patients from UNC Health Care: the Integrated Clinical and Environmental Exposures Service (ICEES). ICEES provides open, regulatory-compliant access to clinical data that have been integrated with environmental exposures data (Fecho et al., in press at JAMIA). The exposures data are derived from public sources, including data on: airborne pollutants from the US EPA Community Multiscale Air Quality Modeling system; roadway exposures from the US DOT Highway Patrol Monitoring System; socio-environmental exposures from the US Census Bureau American Community Survey; and public school exposures from the National Center for Education Statistics. A custom, geospatial- and time-based, data-conversion and -integration pipeline has been developed to support the creation of ‘ICEES integrated feature tables’ (Pfaff et al., 2019; Pfaff et al., under review in JAMIA). The pipeline is modular and extensible and can be adapted for virtually any type of data that is of interest to researchers and requires geocodes, dates, and/or identifiers for integration.


Note that the exposures data are accessible independent of ICEES via open APIs: [US EPA CMAQ Airborne Exposures API](http://bdt-cmaq.renci.org:8080/cmaq_exposures_api/v1/ui/#!/default/get_values); [US DOT Roadway Exposures API](http://bdt-proximity.renci.org:8080/roadway_proximity_api/v1/ui/#!/default/get_distance); and [US Census Bureau ACS API](http://bdt-social.renci.org:8080/socio_environmental_exposures_api/v1/ui/#!/default/get_values). Each of these APIs/services contains documentation on their content and user access, including inputs and outputs. The data have been used by investigators at NIEHS for integrations with survey data as part of their Environmental Polymorphisms Registry.

## User Manual

_Coming soon_

