<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep quiz question inventories in checked-in data files and synchronize them through explicit data updates, never during match creation; this prevents partial inventories and misclassified fallback writes.
- Both play modes select unused questions within the persisted match difficulty before considering repeats; exhaustion must never change difficulty.
