create table if not exists stages
(
    id         bigint                   not null generated always as identity,
    title      varchar(50)              not null,
    created_at timestamp with time zone not null,
    project_id bigint                   not null,
    primary key (id),
    constraint fk_project_stage foreign key (project_id) references projects (id)
)