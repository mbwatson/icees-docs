---
path: "/use-cases/open-clinical-research"
title: "Open Clinical Research"
seo:
    title: "Open Clinical Research"
    keywords: ""
    description: ""
---

## Open and Integrable Clinical Data<a name="open-and-integrable-clinical-data"></a>

DP is a translational scientist and practicing clinician who specializes in the treatment of asthma. A subset of his patients has severe asthma, with symptoms that do not respond to standard treatment. He has observed that many of these patients are female and also suffer from obesity and diabetes. Some of the patients appear to live in heavily populated areas and thus may be exposed to high levels of airborne pollutants. DP would like to formally explore the role of sex, obesity, diabetes, and airborne pollutant exposure in severe asthma. Specifically, he'd like to obtain empirical data on his clinical observations and generate sufficient preliminary data to submit an NIH grant proposal to support deeper exploration of preliminary findings. 

Thus, DP seeks observational clinical data that meet several criteria:

1. the data must be openly accessible and readily available for exploratory research;
2. the data must include a broad set of patient characteristics or phenotypes; and
3. the data must offer a sufficiently large sample size to provide enough statistical power to draw meaningful conclusions.

Through the Translator, DP was able to successfully use [ICEES](/apps/icees) to replicate established or suspected relationships between sex, obesity, diabetes, and exposure to high levels of airborne particulate matter among patients with severe asthma. Shown below is a screenshot of the [ICEES](/apps/icees) API output demonstrating a significant association between diabetes and exposure to high average daily levels of $PM_{2.5}$ (Bin $3 = 47.06\ \mu g/m^3$) among patients with severe asthma (defined by prednisone treatment; $N = 2,240$). Specifically, the results show that diabetes is more common among patients exposed to relatively high levels of $PM_{2.5}$ than among patients exposed to relatively low levels of $PM_{2.5}$ ($26.21\%$ vs $19.59\%$, $P = 0.0002$). Similar results were found for obesity. A full-length manuscript describing this work is under development (Fecho et al., _Journal of Biomedical Informatics_, in preparation with Editor approval for submission as a Special Communication). Of note, this entire research study was conceptualized and executed in less than one week. A more rigorous follow-up study is proposed as part of DP's NIH grant application.

![Screenshot depicting [ICEES](/apps/icees) response describing relationships between severe asthma and other conditions](icees-asthma.png)

_**Translator-enabled open clinical research!**_
