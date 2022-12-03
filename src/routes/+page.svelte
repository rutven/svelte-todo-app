<script>
    import TodoForm from "../components/TodoForm.svelte";
    import {todos} from "../stores/TodoStore.js"
    import Todo from "../components/Todo.svelte";
</script>


<main>
    <h1 class="text-2xl font-bold text-center text-grey-800 md:text-3xl">
        My Todos
    </h1>
    <TodoForm/>
    {#each $todos as todo }
        <Todo todo={todo} />
    {/each}
</main>