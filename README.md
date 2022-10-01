# README

This README would normally document whatever steps are necessary to get the  
application up and running.

Things you may want to cover:

Ruby version

System dependencies

Configuration

Database creation

Database initialization

How to run the test suite

Services (job queues, cache servers, search engines, etc.)

Deployment instructions

```mermaid
flowchart TB
A --> B
B --> C
```


```mermaid
erDiagram
        Member {
        Int id PK
        String name 
        Boolean team_lead
        Booleam manager
        Int job_title_id
    }

     Member ||--||JobTitle : has

    JobTitle {
        Int id fk
        String name
    }

    TeamMembers {
         int team_id
         int member_id
    }
    Member ||--|| TeamMembers : belongs_to
    Team ||--|{ TeamMembers : has_many

    Team {
        Int id PK
        String name
        Int team_lead
    }

    TeamManager {
        Int team_id
        Int member_id
    }
    Member ||--|{ TeamManager : manages
    Team ||--|| TeamManager : reports_to
   
    Tool {
        Int id PK
        String name
    }

    MemberTools {
        Int user
        Int tool
    }

    Team ||--|{ Member : has_many
    Member ||--o{ MemberTools : uses
    Tool ||--o{ MemberTools : used_by

    Repo { 
        Int id
        String name
        String url
        Text description
    }
    
    Repo }|--|| Team : responsible_for

    Service {
        Int id
        String name
        String description
        String prod_url
        String staging_url
        Int team_id
        Int repo_id
    }

   Service ||--|| Team : owned_by
   Service ||--|| Repo : code

   LangVersion {
    Int id PK
    String language
    String veesion 
   }

   FrameworkVersion {
        Int id PK
        String name
        String version 
    
   }


    DependencyCatalogue {
        Int id PK
        String name
        Text description 
        String url
        Jsonb meta
        Text Notes
    }

    TechRadar {
        Int id PK
        Jsonb Meta
    }

    Tool ||--|| TechRadar : satus


GoldenPath {
    Int id PK
    String category 
    Jsonb meta
}


```