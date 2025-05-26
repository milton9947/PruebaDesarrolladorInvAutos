package com.invautosws.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class CargoDTO {
    @NotNull(message = "El id es obligatoria")
    private Long id;

    @NotBlank(message = "El nombre del cargo es obligatorio")
    private String nombre;
}
