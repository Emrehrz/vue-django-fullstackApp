import gql from "graphql-tag"


export const USER_SIGNUP = gql`
  mutation ($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password)
    user {
      id
      username
    }
  }
`

export const USER_SIGNIN = gql`
mutation($username: String!, $password: String!) {
  token
  user {
    id
    username
    firstName
    lastName
    email
    avatar
    bio
    location
    website
  }
}
`

export const SUBMIT_COMMENT = gql`
mutation($content: String!, $userId: ID!, $postID: ID!) {
  createComment(content: $content, userId: $userID, postId: $postID)
  comment {
    content
  }
}
`

export const UPDATE_POST_LIKE = gql`
mutation($postID: ID!, $userID: ID!){
  updatePostLike(postId: $postID, userId: $userID) {
    post {
      id
      title
      likes {
        id
      }
    }
  }
}
`

export const UPDATE_COMMENT_LIKE = gql`
mutation($commentID: ID!, $userID: ID!) {
  updateCommentLike(commentId: $commentID, userId: $userID) {
    comment {
      id
      likes {
        id
      }
    }
  }
}
`

export const UPDATE_USER_PROFILE = gql`
mutation(
  $userID: ID!
  $firstName: String!
  $lastName: String!
  $avatar: Upload!
  $bio: String!
  $location: String!
  $website: String!
) {
  user{
    id
    username
    firstName
    lastName
    email
    avatar
    bio
    location
    website
    commentSet {
      id
      content
      post {
        id
        title
        slug
      }
      isApproved
    }
  }
}
`