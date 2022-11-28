import { BackendAsset } from "asset-type";
import { DefaultModelType } from "model-types";
import { Person } from "peer-types";
/**
---
dbStorageMethod: jsonSingle
---


GOAL:

- provide a good way for freelancers and students to self-assess
- structure the data to provide tools for self-analysis

TODO: PREREQUISITE:

- auth layer
- p2p
- create a **model-agnostic-ui** that renders this type of models nicely (many checkmarks, some sliders, some descriptions). can simply be converted into text for the most part
- make the DB crud component
  - which also allows extra columns
  - which also has an option to use the **model-agnostic-ui**
- add `Dataset`s support to DB crud
- make sure the form shows nicely
  - slider component and convention
  - show description by ensuring that, if the trimmed description is an empty string, it shows everything on all lines after, until the next variable
- monetisation

THOUGHTS:

- this was just one hour of work, and it kind of is a product (given I make all the general purpose prerequisites). I can make it a bundle that devs can install and BOOM! you got a SaaS... just charge 1$ per entry xD
- think about other things that can be assessed, can/should they be automated too? not only for teams, also for intimate groups of people to assess private things, also for yourself completely
- if I have more things like this, which are basically scoring sheets, I can easily reuse the statistics part of the UI that I make for this

TODO: CUSTOM:

- make a `ui-web` operation that has just this crud (or add to the Todo UI)
- add nice flow for showing the "coder of the week"
- add a column to share an item on social media if it's your own (may be super reusable too)
- later add things like summaries, history, comparisons, insights (but do it as generic as possible)
- later provide more auto-filled datapoints (xyzIndexed) for different things
- later let user auto-share things with the marketstack xD

*/
export declare type SelfSprintReview = ReviewSummary & {
    personId: string;
    person?: Person;
    /**
    DESCRIPTION:
  
    - ensure code gets reviewed
    - document well
    - clear naming and simple, elegant code
    - apply all conventions
    - use all king OS libraries
    */
    codeQuality: ReviewSummary & {
        lastWeeksCodeGotReviewedThisWeek: boolean;
        allCodeDocumented: boolean;
    };
    /**
    DESCRIPTION:
  
    - full time?
    - at least 50% coding editor time?
    - provide screen time statistics
  
    */
    timeManagement: ReviewSummary & {
        screenTimeHours: number;
        vscodeHours: number;
        distractedHours: number;
        projectBrowserHours: number;
        englishLearningHours: number;
        screenshotImages: BackendAsset[];
    };
    /**
    
    DESCRIPTION:
  
    - daily networking session on linkedin (and maybe others) (<30m)
    - attract an audience by creating valueable content for your niche
    - have conversations and (video) calls with recruiters and companies, record and share them
  
   */
    networking: ReviewSummary & {
        dailyNetworkingSession: boolean;
        contentCreatedThisWeek: boolean;
        recruiterOrCompanyMeetingThisWeek: boolean;
    };
    /**
  
    DESCRIPTION:
  
    - Build some project of your own on the side (or as main thing)
    - Progress on this every week, keep us updated
    - Learn how to find a good idea, validate it, form a product, market it, get interested users, get feedback, monetise it.
  
    */
    entrepreneurship: ReviewSummary & {
        workedOnPassionProject: boolean;
        progressUpdateDescription: string;
    };
    /**
  DESCRIPTION:
  
  - daily todo list
  - daily done list
  - good sprint planning statement
  - good sprint review statement
  - ask sharp questions
  - never be stuck, ensure you're never blocked
  - share code (changes) and demos frequently
  - if you can't uphold agreement, communicate this asap (better beforehand and as early as possible) and honestly
  - be present and on time (sharp) at all meetings
  - share payment request once per month, on time
  - share hours worked (with proof: wakatime, screentime) at least every week
  - share accomplishments
  - present bigger topics, be proactive about this
  
      */
    clientCommunication: ReviewSummary & {
        dailyTodoList: boolean;
        dailyDoneList: boolean;
        goodSprintPlanningStatement: boolean;
        goodSprintReviewStatement: boolean;
        iAskSharpQuestions: boolean;
        iAmNeverBlocked: boolean;
        iShareCodeChangesDaily: boolean;
        upheldAgreement: boolean;
        presentAndOnTimeAtMeetings: boolean;
        sharePaymentRequest: boolean;
        shareHoursWorked: boolean;
    };
    problemsDescription: string;
    solutionsDescription: string;
    proudOfDescription: string;
} & DefaultModelType;
export declare type ReviewSummary = {
    scoreYourselfSlider: number;
    scoreYourselfDescription: string;
    coderOfTheWeekVote_personId: string;
    coderOfTheWeekVoteDescription: string;
};
//# sourceMappingURL=SelfSprintReview.d.ts.map