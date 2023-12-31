<script lang="ts">
	import TBody from './TBody.svelte';
	import THead from './THead.svelte';
	import { ascendinSort, descendingSort, debounce } from './helper';

	/**
	 * Usage - Refer README.md
	 */

	type TableData = {
		columns: {
			name: string;
			fieldName: string;
			thStyle?: object;
			tdStyle?: object;
			thClass?: string;
			tdClass?: string;
		}[];
		data: object[];
	};
	export let tableTitle = 'Data Table';
	export let pagination = false;
	export let tableData: TableData = { columns: [], data: [] };
	export let tableHeight: string='auto';
	export let horizontalTable: boolean= true;

	const columnData = tableData.columns || [];
	const rowData = tableData.data || [];

	let rowDataCopy = rowData.slice();

	let rowsPerPage = pagination ? 10 : rowData.length;
	let currentPage = 0;

	$: start = currentPage * rowsPerPage;

	$: end = Math.min(start + rowsPerPage, rowDataCopy.length);

	$: slice = rowDataCopy.slice(start, end);

	$: lastPage = Math.max(Math.ceil(rowDataCopy.length / rowsPerPage) - 1, 0);

	$: if (currentPage > lastPage) {
		currentPage = lastPage;
	}



</script>

<div class="app-table tw-w-full tw-overflow-x-auto tw-rounded-md tw-border tw-border-inherit">
	
	<!-- <div class="app-table-wrapper" style={`height: ${tableHeight || 'auto'} `}> -->
		<table class="tw-table tw-w-full">
			<!-- head -->
			<THead>
				{#each columnData as eachCol}
					<th
						class={`app-table-th ${eachCol.thClass || ''}`}
						style={`${
							eachCol.thStyle && typeof eachCol.thStyle === 'object'
								? JSON.stringify(eachCol.thStyle).replace(/[{}"]/gi, '').replace(/,/gi, ';')
								: ''
						}`}
						><div class="app-th-label app-inline-block">{eachCol.name}</div>
					</th>
				{/each}
			</THead>

			<TBody>
				{#each slice as eachRow}
					<tr class="tw-hover"
						>{#each columnData as eachCol}
							<td
								class={`app-table-td ${eachCol.tdClass || ''}`}
								style={`${
									eachCol.tdStyle && typeof eachCol.tdStyle === 'object'
										? JSON.stringify(eachCol.tdStyle).replace(/[{}"]/gi, '').replace(/,/gi, ';')
										: ''
								}`}
								>{eachRow[eachCol.fieldName] || ''}
							</td>{/each}</tr
					>
				{/each}
			</TBody>
		</table>
	<!-- </div> -->
	{#if pagination}
		<div
			class="tw-flex tw-w-full tw-items-center tw-justify-end tw-border tw-border-inherit tw-py-4 tw-px-4"
		>
			<div>
				<span class="tw-text-sm">Rows per page</span>
				<select bind:value={rowsPerPage} class="tw-select-bordered tw-select tw-select-sm tw-ml-2">
					<!-- {#each questions as question} -->
					<option value={10}> 10</option>
					<option value={25}> 25 </option>
					<option value={50}> 50 </option>
					<option value={100}> 100 </option>
					<!-- {/each} -->
				</select>
			</div>

			<div class="tw-mx-4">{start + 1} - {end} of {rowData.length}</div>
			<div class="tw-btn-group tw-grid tw-grid-cols-4">
				<button
					title="First Page"
					class="tw-btn-outline tw-btn-sm tw-btn"
					on:click={() => (currentPage = 0)}
					disabled={currentPage === 0}>{`<<`}</button
				>
				<button
					title="Previous Page"
					class="tw-btn-outline tw-btn-sm tw-btn"
					on:click={() => currentPage--}
					disabled={currentPage === 0}>{`<`}</button
				>
				<button
					title="Next Page"
					class="tw-btn-outline tw-btn-sm tw-btn"
					on:click={() => currentPage++}
					disabled={currentPage === lastPage}>{`>`}</button
				>
				<button
					title="Last Page"
					class="tw-btn-outline tw-btn-sm tw-btn"
					on:click={() => (currentPage = lastPage)}
					disabled={currentPage === lastPage}>{`>>`}</button
				>
			</div>
		</div>
	{/if}
</div>

<style>
	.app-th-arrow-con {
		padding-left: 0.5rem;
	}
	.app-inline-block {
		display: inline-block;
		vertical-align: middle;
	}
	.app-block {
		display: block;
	}
	.th-arrow-up {
		padding-bottom: 0.125rem;
	}
	.th-arrow-down {
		padding-top: 0.125rem;
	}
	.app-table {
		background: #b5c6e380;
	}
	.app-table-wrapper {
		min-height: 20rem;
		overflow: auto;
	}
	.app-table-th {
		border-right: 1px solid #fff;
		font-weight: bold;
		color: #fff;
		background-color: #1f2937;
		position: sticky;
		top: 0;
		text-align: left;
	}
	.app-table-th:first-child {
		left: unset !important;
	}
	.app-table-td {
		white-space: break-spaces;
	}
</style>
