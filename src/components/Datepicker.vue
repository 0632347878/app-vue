<template>
    <div>
        <input type="text" ref="picker" class="form-control" :value="value">
        <!--<slot>Текст по умолчанию</slot>-->
        <!--<slot name="testslot">Текстовый слот</slot>-->
    </div>
</template>

<script>
import flatpickr from 'flatpickr'
import 'flatpickr/dist/flatpickr.css'

    export default {
        name: 'Datepicker',
        data: () => ({
            fp: null
        }),
        methods: {
            updateDatepicker () {
                this.fp.setDate(this.value)
            }
        },
        props: {
            value: {
                type: '',
                required: true
            }
        },
        mounted () {
            flatpickr(this.$refs.picker, {
                dateFormat: 'd.m.Y',
                onChange: (selectedDate, dateStr) => {
                    this.$emit('change', dateStr)
                }
            })
        }
    }
</script>