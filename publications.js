/* =====================================================================
   PUBLICATIONS  —  edit THIS file to add or change papers, then reload.
   Works both locally (double-click index.html) and when deployed.

   Copy an entry, give it a unique key (word after the '{'), fill fields.
   Required: title, author, year, venue.
   Optional: venuefull, url, pdf, code, slides, poster, note.
   Authors are separated by the word "and"; your own name is auto-bolded.
   ===================================================================== */
   window.BIBTEX = String.raw`
   @article{meier2026wordretrieval,
     title     = {Word retrieval in the wild: The feasibility of an audio-based ecological momentary naming protocol completed by adults with and without post-stroke aphasia},
     author    = {Erin Meier and Jack Hester and Ha Le and Veronica Fletcher and Hai-Dinh Phan and Leanna Ugent and Stephen S. Intille},
     year      = {2026},
     venue     = {AJSLP '26},
     venuefull = {American Journal of Speech-Language Pathology},
     note      = {Conditionally Accepted}
   }
   
   @inproceedings{le2026multiagent,
     title  = {Feasibility of using a Multi-Agent LLM System to Correct Annotations and Support Low-Effort Activity Labeling},
     author = {Ha Le and Akshat Choube and Varun Mishra and Stephen Intille},
     year   = {2026},
     venue     = {IMWUT '26},
     venuefull = {Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies},
     pdf       = {pdfs/GLOSS4HAR_imwut26.pdf},
     demo      = {blogs/gloss4har.html},
     url = {https://doi.org/10.1145/3831653},
     note      = {Conditionally Accepted}
   }
   
   @inproceedings{choube2026daimon,
     title  = {DAIMON: Designing AI-Augmented Research Dashboards to Enable Novel Human-AI Collaborative Workflows in Longitudinal Sensing Studies},
     author = {Akshat Choube and Shreeti Shrestha and Ha Le and Jiachen Li and Vedant Das Swain and Varun Mishra},
     year   = {2026},
     venue     = {IMWUT '26},
     url = {https://doi.org/10.1145/3832033},
     venuefull = {Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies},
     note      = {Conditionally Accepted}
   }
   
   @inproceedings{kim2026games,
     title  = {Generating Personalized Games with Sensing Data for Longitudinal Data Collection},
     author = {Jin-seo Kim and Ha Le and Akshat Choube and Varun Mishra and Stephen Intille},
     year   = {2026},
     venue     = {UIST '26},
     venuefull = {ACM Symposium on User Interface Software and Technology},
     doi={https://doi.org/10.1145/3830398.3830678},
     note      = {Conditionally Accepted}
   }
   
   @article{le2025acai,
     title  = {A Context-Assisted, Semi-Automated Activity Recall Interface Allowing Uncertainty},
     author = {Ha Le and Veronika Potter and Akshat Choube and Rithika Lakshminarayanan and Varun Mishra and Stephen Intille},
     year   = {2025},
     venue     = {IMWUT '25},
     venuefull = {Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies},
     url    = {https://doi.org/10.1145/3770710},
     pdf    = {pdfs/ACAI.pdf}
   }
   
   @inproceedings{le2025manetwork,
     title  = {A Multi-Agent LLM Network for Suggesting and Correcting Human Activity and Posture Annotations},
     author = {Ha Le and Akshat Choube and Vedant Das Swain and Varun Mishra and Stephen Intille},
     year   = {2025},
     venue     = {GenAI4HS Workshop @ Ubicomp '25},
     venuefull = {Workshop on Generative AI for Health, at ACM UbiComp},
     url    = {https://doi.org/10.1145/3714394.3756185},
     pdf    = {pdfs/3714394.3756185.pdf}
   }
   
   @article{choube2025gloss,
     title  = {GLOSS: Group of LLMs for Open-Ended Sensemaking of Passive Sensing Data for Health and Wellbeing},
     author = {Akshat Choube and Ha Le and Jiachen Li and Kaixin Ji and Vedant Das Swain and Varun Mishra},
     year   = {2025},
     venue     = {IMWUT '25},
     venuefull = {Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies},
     url    = {https://dl.acm.org/doi/10.1145/3749474},
     pdf    = {pdfs/GLOSS.pdf}
   }
   
   @inproceedings{potter2025uncertainty,
     title  = {An Evaluation of Temporal and Categorical Uncertainty on Timelines: A Case Study in Human Activity Recall Visualizations},
     author = {Veronika Potter and Ha Le and Uzma Haque Syeda and Stephen Intille and Michelle Borkin},
     year   = {2025},
     venue     = {IEEE VIS '25},
     venuefull = {IEEE Visualization Conference},
     url    = {https://ieeexplore.ieee.org/document/11298755},
     pdf    = {pdfs/VIS25.pdf}
   }
   
   @inproceedings{le2025uema,
     title  = {Feasibility and Utility of Multimodal Micro Ecological Momentary Assessment on a Smartwatch},
     author = {Ha Le and Veronika Potter and Rithika Lakshminarayanan and Varun Mishra and Stephen Intille},
     year   = {2025},
     venue     = {CHI '25},
     venuefull = {ACM CHI Conference on Human Factors in Computing Systems},
     url    = {https://doi.org/10.1145/3706598.3714086},
     pdf    = {pdfs/multimodalEMA.pdf}
   }
   
   @article{le2024audioema,
     title  = {Collecting Self-reported Physical Activity and Posture Data using Audio-based Ecological Momentary Assessment},
     author = {Ha Le and Rithika Lakshminarayanan and Jixin Li and Varun Mishra and Stephen Intille},
     year   = {2024},
     venue     = {IMWUT '24},
     venuefull = {Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies},
     url    = {https://doi.org/10.1145/3678584},
     pdf    = {pdfs/audiouEMA.pdf}
   }
   
   @inproceedings{lakshminarayanan2024sleep,
     title  = {Detecting Sleep Disruptions in Adolescents Using Context-sensitive Ecological Momentary Assessment: A Feasibility Study},
     author = {Rithika Lakshminarayanan and Arushi Uppal and Ha Le and James C. Spilsbury and Stephen Intille},
     year   = {2024},
     venue     = {PervasiveHealth '24},
     venuefull = {EAI International Conference on Pervasive Computing Technologies for Healthcare},
     url    = {https://link.springer.com/chapter/10.1007/978-3-031-85572-6_20},
     pdf    = {pdfs/sleep.pdf}
   }
   
   @article{carey2024mhealth,
     title  = {mHealth-Based Just-in-Time Adaptive Intervention to Improve the Physical Activity Levels of Individuals With Spinal Cord Injury: Protocol for a Randomized Controlled Trial},
     author = {Rachel L Carey and Ha Le and Donna L Coffman and Inbal Nahum-Shani and Mohanraj Thirumalai and Cole Hagen and Laura A Baehr and Mary Schmidt-Read and Marlyn S R Lamboy and Stephanie A Kolakowsky-Hayner and Ralph J Marino and Stephen S Intille and Shivayogi V Hiremath},
     year   = {2024},
     venue     = {JMIR},
     venuefull = {JMIR Research Protocols},
     url    = {https://www.researchprotocols.org/2024/1/e57699},
     note   = {Co-first author}
   }
   
   @inproceedings{hester2023aphasia,
     title  = {A Feasibility Study on the Use of Audio-based Ecological Momentary Assessment with Persons with Aphasia},
     author = {Jack Hester and Ha Le and Stephen Intille and Erin Meier},
     year   = {2023},
     venue     = {ASSETS '23},
     venuefull = {ACM SIGACCESS Conference on Computers and Accessibility},
     url    = {https://doi.org/10.1145/3597638.3608419}
   }
   
   @article{ford2023primus,
     title  = {Relating Consistent Improvement to Overall Performance in a Calculus I Course that Utilizes Standards-Based Grading},
     author = {Jeff Ford and Rachel Erickson and Ha Le and Kaylee Vick and Jillian Downey},
     year   = {2023},
     venue     = {PRIMUS},
     venuefull = {PRIMUS: Problems, Resources, and Issues in Mathematics Undergraduate Studies},
     url    = {https://doi.org/10.1080/10511970.2024.2361374}
   }
   
   @misc{le2022twitch,
     title  = {A study on Channel Popularity in Twitch},
     author = {Ha Le and Junming Wu and Louis Yu and Melissa Lynn},
     year   = {2022},
     venue  = {Undergraduate Research},
     pdf    = {pdfs/twitch.pdf},
     slides = {pdfs/twitch_present_draft.pptx.pdf},
     code   = {https://github.com/hvrlxy/twitch_crawling},
     poster = {pdfs/POSTER.pdf}
   }
   
   @misc{belik2022solitaire,
     title  = {One-dimensional Port-and-Sweep Solitaire Armies},
     author = {Filip Belik and Ha Le and Jacob Siehler},
     year   = {2022},
     venue  = {Undergraduate Research},
     pdf    = {pdfs/One_dimensional_Port_and_Sweep_Solitaire_Armies.pdf},
     slides = {pdfs/PaSS.pdf}
   }
   `;