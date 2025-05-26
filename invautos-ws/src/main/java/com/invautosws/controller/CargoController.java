package com.invautosws.controller;

import com.invautosws.dto.CargoDTO;
import com.invautosws.service.CargoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cargos")
@CrossOrigin(origins = "http://localhost:4200")
public class CargoController {
    @Autowired
    private CargoService cargoService;

    @PostMapping
    public ResponseEntity<CargoDTO> crear(@RequestBody CargoDTO dto) {
        return ResponseEntity.ok(cargoService.crear(dto));
    }

    @PutMapping()
    public ResponseEntity<CargoDTO> editar(@RequestBody CargoDTO dto) {
        return ResponseEntity.ok(cargoService.editar(dto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable Long id) {
        cargoService.eliminar(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping
    public ResponseEntity<List<CargoDTO>> listar() {
        return ResponseEntity.ok(cargoService.listar());
    }
}
