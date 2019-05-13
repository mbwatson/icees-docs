### FHIR PIT

## Overview

FHIR PIT (FHIR Patient data Integration Tool)is a custom software application that was developed as part of the Translator project in an effort to facilitate and automate the integration of clinical data with environmental exposures data.

**Motivation**

In order to fully understand the impact of environmental exposures on health and disease, one needs to identify an approach for examining exposures for individual patients. Data on environmental exposures such as airborne pollutants and workplace toxicants are available in numerous publicly accessible databases. Likewise, patient data are available, with IRB approval, via the clinical data warehouses of academic medical institutions. However, the integration of clinical data with data on environmental exposures requires geocodes and time periods of interest. Thus, the integration process requires a secure environment (i.e., a secure machine inside an institutional firewall) and an IRB-approved protocol. Moreover, the integration process is complex, especially if one wishes to integrate multiple sources of environmental exposures data.

FHIR PIT was designed to address these challenges. As part of the Translator program, team members have developed a framework and approach for openly exposing clinical data on patients in the UNC Health Care System: the [Integrated Clinical and Environmental Exposures Service](https://github.com/ResearchSoftwareInstitute/data-translator/tree/master/src/pages/apps/icees). 

**Approach**

FHIR PIT  integrates clinical data with environmental exposures data from any number of sources before stripping the data of PHI and binning feature variables to create ICEES integrated feature tables. 

A high-level overview of the pipeline is shown below.

[**ICEES Integration Pipeline**](FHIR_PIT.png)

The data sources included in the figure represent those that are being used for the current ICEES integrated feature tables. (A dotted line means that the data have not yet been integrated.) FHIR PIT is not, however, restricted to these public exposures data; with slight modification, the pipeline can be adapted for virtually any data source.

Note that the exposures data are accessible independent of ICEES via open APIs: [US EPA CMAQ Airborne Exposures API](http://bdt-cmaq.renci.org:8080/cmaq_exposures_api/v1/ui/#!/default/get_values); [US DOT Roadway Exposures API](http://bdt-proximity.renci.org:8080/roadway_proximity_api/v1/ui/#!/default/get_distance); and [US Census Bureau ACS API](http://bdt-social.renci.org:8080/socio_environmental_exposures_api/v1/ui/#!/default/get_values). Each of these APIs/services contains documentation on their content and user access, including inputs and outputs. 

**Use Cases**

To date, FHIR PIT has been used to integrate FHIR files from [CAMP FHIR](https://github.com/ResearchSoftwareInstitute/data-translator/blob/master/src/pages/apps/camp_fhir) with the public exposures data shown in the figure in the context of a use case that aims to explore environmental influences on asthma. The resultant work has been published (Ahalt et al. CTS, in press; Fecho et al. JAMIA, in press).

**Generalizability**

The pipeline is modular and extensible and can be adapted for virtually any type of data that is of interest to researchers and requires geocodes, dates, and/or identifiers for integration.

**GitHub Repo**

FHIR PIT is freely accessible and can be downloaded from a [FHIR PIT GitHub repository](https://github.com/xu-hao/datatrans) provide access to the source. In order to use CAMP FHIR, users run these scripts (or their own versions).
