package com.invautosws.controller;

import com.invautosws.dto.MercanciaDTO;
import com.invautosws.service.MercanciaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/mercancias")
@CrossOrigin(origins = "http://localhost:4200")
public class MercanciaController {
    @Autowired
    private MercanciaService mercanciaService;

    @PostMapping
    public ResponseEntity<MercanciaDTO> crear(@RequestBody MercanciaDTO dto) {
        return ResponseEntity.ok(mercanciaService.crear(dto));
    }

    @PutMapping
    public ResponseEntity<MercanciaDTO> editar(@RequestBody MercanciaDTO dto) {
        return ResponseEntity.ok(mercanciaService.editar(dto));
    }

    @DeleteMapping("/{id}/{usuarioId}")
    public ResponseEntity<Void> eliminar(@PathVariable Long id, @PathVariable Long usuarioId) {
        mercanciaService.eliminar(id, usuarioId);
        return ResponseEntity.noContent().build();
    }

    @GetMapping
    public ResponseEntity<List<MercanciaDTO>> listar() {
        return ResponseEntity.ok(mercanciaService.listar());
    }

    @GetMapping("/{id}")
    public ResponseEntity<MercanciaDTO> getById(@PathVariable Long id) {
        return ResponseEntity.ok(mercanciaService.getById(id));
    }

    @GetMapping("/filtros")
    public ResponseEntity<List<MercanciaDTO>> buscar(
            @RequestParam Optional<String> nombre,
            @RequestParam Optional<Long> usuarioId,
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) Optional<LocalDate> fecha
    ) {
        return ResponseEntity.ok(mercanciaService.listar(nombre, usuarioId, fecha));
    }
}
