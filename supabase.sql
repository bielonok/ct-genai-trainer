-- CT-GenAI Тренажер: таблиця прогресу (по одному рядку на користувача)
create table if not exists public.progress (
  user_id    uuid primary key default auth.uid() references auth.users(id) on delete cascade,
  data       jsonb  not null,
  ts         bigint not null default 0,
  updated_at timestamptz not null default now()
);

alter table public.progress enable row level security;

-- Кожен бачить і змінює лише свій рядок
drop policy if exists "progress_select_own" on public.progress;
drop policy if exists "progress_insert_own" on public.progress;
drop policy if exists "progress_update_own" on public.progress;
create policy "progress_select_own" on public.progress for select to authenticated using (auth.uid() = user_id);
create policy "progress_insert_own" on public.progress for insert to authenticated with check (auth.uid() = user_id);
create policy "progress_update_own" on public.progress for update to authenticated using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- updated_at оновлюється автоматично
create or replace function public.progress_touch() returns trigger language plpgsql as $$
begin new.updated_at = now(); return new; end $$;
drop trigger if exists progress_touch on public.progress;
create trigger progress_touch before update on public.progress for each row execute function public.progress_touch();
