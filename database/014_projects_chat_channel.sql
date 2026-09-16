alter table chat_conversations
  add column if not exists channel text not null default 'MAIN';

alter table chat_conversations
  drop constraint if exists chat_conversations_visitor_token_hash_key;

create unique index if not exists chat_conversations_channel_visitor_idx
  on chat_conversations(channel, visitor_token_hash);

create index if not exists chat_conversations_channel_idx
  on chat_conversations(channel, last_message_at desc);
