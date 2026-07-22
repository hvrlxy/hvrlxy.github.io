// the problem

Collecting high-quality labels for human activity recognition (HAR) in free-living settings remains one of the biggest challenges in ubiquitous computing. Most studies rely on participants to self-report what they did throughout the day, but these reports are often incomplete, temporally inaccurate, and require substantial effort from both participants and researchers to clean and verify.

As wearable devices become part of everyday life, this annotation process is unlikely to scale. We need annotation methods that improve both data quality and the user experience, without requiring researchers or clinicians to manually review every activity timeline.

// the idea
Humans and AI have complementary strengths.

People are excellent at remembering the meaningful events of their day—studying for an exam, attending a meeting, going to a concert, or cooking dinner. These high-level activities are often impossible to infer from sensor data alone. However, people are much less reliable at recalling exact timestamps, short transitions, or brief activities that occur throughout the day.

Conversely, sensing systems excel at continuously monitoring behavior. They can detect movement, identify anomalies, search large amounts of sensor data, and reason across multiple data streams, but they lack the personal context needed to fully understand what those signals represent.

GLOSS4HAR combines these complementary strengths through a multi-agent LLM system that mimics the human sensemaking process. Rather than replacing participants, the system collaborates with them by triangulating passive sensing data with lightweight self-reports to produce more accurate activity timelines.

// research questi
Our work explores two questions:

RQ1. Can a multi-agent LLM identify mistakes in participants' self-reports and suggest reasonable corrections?

Can the system detect omissions, temporal misalignment, and merged activities by combining multiple sensor streams with participants' own descriptions?

RQ2. Can a multi-agent LLM support low-effort self-reporting?

Can passive sensing combined with lightweight self-reports—such as μEMA, activity lists, or end-of-day summaries—recover detailed activity timelines while reducing participant burden?