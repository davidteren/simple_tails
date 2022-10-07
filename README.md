```mermaid
erDiagram
  Member {
    Int id PK
    String first_name
    String last_name
    String email
    Int title_id
    Boolean active
  }
  
  Member ||--||Title : has
  
  Title {
    Int id FK
    String name
  }
  
     
  Member ||..o{ TeamMembers : belongs_to
  Team ||..o{ TeamMembers : has_many
  
  Team {
    Int id PK
    String name
    Int team_lead
  }
  
  Team ||..o{ TeamTools : uses
  Tool ||..o{ TeamTools : used_by
  
  Tool {
    Int id PK
    String name
    Text description
    Sting tool_type
    String URL 
    Boolean individual_use
    Boolean all_teams_use
    Boolean has_cost
    Int tool_management_id FK
  }
  
  Team ||..o{ ToolOwner : owns
  Tool ||..o{ ToolOwner : managed_by
  
  Team ||--|{ Member : has_many
  
  Member ||..o{ MemberTools : uses
  Tool ||..o{ MemberTools : used_by
  
  Sbom {
    Int id PK
    String format 
    Jsonb date
    Int repo_id
  }
  
  Repo ||..o{ RepoSboms : many
  Sbom ||..|| RepoSboms : has-one
  
  Repo { 
    Int id
    String name
    String URL
    Text description
    Jsonb meta
  }
  
  Repo }|--|| Team : owns
  
  Service {
    Int id
    String name
    String description
    Int team_id
    Int repo_id
    Int link_id
  }
  
  Service ||--|| Link : has_one
  
  Link {
    Int id PK
    String prod_url
    String staging_url
    String demo_url
    String documentation_url
    Jsonb meta
  } 
  
  Team ||--o{ Service : owns
  Service ||--|| Repo : used_by
  
  Repo ||..o{ RepoDependancies : uses
  Dependency ||..o{ RepoDependancies : uses
  
  Dependency {
    Int id PK
    string type 
    String name
    Text description 
    String URL
    Jsonb meta
    Text notes
  }
  
  TechRadar {
    Int id PK
    Int tool_id FK
    String type
    String status 
    Jsonb Meta
  }
  
  Member }o..o{ MemberTechRadars : proposes
  TechRadar }o..o{ MemberTechRadars : proposed
  
  AwsAccount {
    Int id PK 
    String name
    String id
  }
  
  Team ||..o{ TeamAwsAccounts : has
  AwsAccount ||..o{ TeamAwsAccounts: belongs_to
  
  GoldenPath {
    Int id PK
    String category 
    Jsonb meta
  }

```