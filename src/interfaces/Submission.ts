import {FeatureFlags} from "flagged";

export interface Submission {
    features: FeatureFlags;
    reportId: string;
    title: string;
    abstractText: string;
    authors: Author[];
    scopeMatch: ScopeMatch | null;
    duplicateChecked: boolean;
    duplicates: Duplicate[];
    allAuthorsNearestPapers: Paper[];
}

export interface ScopeMatch {
    score: number | null;
    trending: Map<string, number> | { [key: string]: number };
    yearTrend: Map<string, number> | { [key: string]: number };
    nearestPapers: NearestPapers;
    atsJournals: AtsJournal[];
}

export interface AtsJournal {
    journalName: string;
    isCasJournal: boolean;
    score: number | null;
    citeScore: number | null;
    impactFactor: number | null;
    ptsCode: string;
    trending: Map<string, number> | { [key: string]: number } | null;
}

export interface Author {
    firstName: string;
    lastName: string;
    scopusId?: number;
    orcId?: string | null;
    authorSeq: number;
    institutions?: Institution[] | [];
    submissionAuthor?: boolean;
    manuscriptAuthor?: boolean;
    nearestPapers?: Paper[];
}

export interface Institution {
    scopusId: number;
    institutionName: string;
}

export interface NearestPapers {
    thisJournal: Paper[];
    otherJournals: Paper[];
}

export interface Paper {
    title: string;
    journal?: string;
    distance?: number;
    scopusId?: number;
    publicationDate?: string;
    authors?: Author[];
    year?: number;
    citeScoreYear?: number | null;
    citeScore?: number | null;
}

export interface Paper {
    title: string;
    scopusId?: number
    journal?: string
    year?: number;
    issn?: string;
    citeScore?: number | null;
    citeScoreYear?: number | null;
}

export interface Duplicate {
    manuscriptId: string;
    documentId: number;
    publicationCode: string;
    journalName: string;
    title: string;
    abstractText: string;
    submissionDate: string;
    detectionDate: string;
    pdfAvailable : boolean | null,
    authors?: Author[];
}
