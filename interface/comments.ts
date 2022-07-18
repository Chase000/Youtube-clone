export interface IComments {
    [x: string]: any;
    videos: [IComment]
};

export interface IComment {
    kind: string;
    id:string;
    snippet:ICommentsnippet;
}

export interface ICommentsnippet {
    videoId: string;
    topLevelComment:ItopLevelComment;
    canReply: boolean;
    totalReplyCount: number;
    isPublic: boolean;
}

export interface ItopLevelComment {
    kind: string;
    id: string;
    snippet: ItopLevelSnippet;
    totalReplyCount: number;
    videoId: string;
}

export interface ItopLevelSnippet {
    authorChannelId: object;
    authorChannelUrl: string;
    authorDisplayName: string;
    authorProfileImageUrl: string;
    canRate: boolean;
    likeCount: number;
    publishedAt: string;
    textDisplay: string;
    textOriginal: string;
    updatedAt: string;
    videoId: string;
    viewerRating: string;
    totalReplyCount: number;
}