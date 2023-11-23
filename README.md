# Elewa Social Network

# Database Schema

## Users Table
Stores information about registered users.

| Column Name | Data Type    |
|-------------|--------------|
| user_id     | INTEGER (PK) |
| username    | VARCHAR(50)  |
| email       | VARCHAR(100) |
| password    | VARCHAR(255) |
| zip_code    | VARCHAR(20)  |
| is_premium  | BOOLEAN      |

## Posts Table
Stores information about posts from the JSON placeholder API.

| Column Name | Data Type    |
|-------------|--------------|
| post_id     | INTEGER (PK) |
| user_id     | INTEGER (FK) |
| title       | VARCHAR(255) |
| body        | TEXT         |

## Follows Table
Stores information about users following other users.

| Column Name  | Data Type    |
|--------------|--------------|
| follow_id    | INTEGER (PK) |
| follower_id  | INTEGER (FK) |
| following_id | INTEGER (FK) |

## BlockedPosts Table
Stores information about posts blocked by users.

| Column Name | Data Type    |
|-------------|--------------|
| block_id    | INTEGER (PK) |
| user_id     | INTEGER (FK) |
| post_id     | INTEGER (FK) |

## Relationship Descriptions
- The Users table stores information about registered users, including whether they are premium users.
- The Posts table stores posts fetched from the JSON placeholder API, associating each post with a user.
- The Follows table establishes a many-to-many relationship between users, allowing one user to follow multiple others.
- The BlockedPosts table records posts blocked by users, indicating which user blocked which post.


# This work is still in progress. 