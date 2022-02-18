<template>
	<div>
		<v-dialog v-model="dialogo" width="500">
			<v-card>
				<v-card-title class="headline grey lighten-2" primary-title>
					{{ titulo }}
				</v-card-title>
				<v-card-text v-html="texto"></v-card-text>
				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn color="primary" text @click.stop="dialogo = false">
						CERRAR
					</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
	</div>
</template>

<script>
export default {
	name: "Dialogos",
	props: ['titulo','texto','value'],
	data: () => ({}),
	computed:{
		dialogo: {
			get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value)
      }
		}
	}
};
</script>