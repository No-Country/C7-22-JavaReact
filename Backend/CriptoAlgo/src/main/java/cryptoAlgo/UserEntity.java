package cryptoAlgo;

import com.sun.xml.bind.v2.TODO;
import cryptoAlgo.models.RoleEntity;
import lombok.*;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.sql.Timestamp;
import java.util.Set;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "users")
@SQLDelete(sql= "UPDATE users SET deleted = true Where id=?")
@Where(clause = "deleted=false")
public class UserEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NonNull
    @NotBlank
    @NotEmpty
    @Column(name = "first_name", nullable = false)
    private String firstName;

    @NonNull
    @NotBlank
    @NotEmpty
    @Column(name = "last_name", nullable = false)
    private String lastName;

    @NotNull
    @Email
    @Column(unique = true, nullable = false)
    private String email;

    //Todo Realizar toda la logica para subir una Imagen a la nube, si hay suficiente tiempo. //private String photo;

    @NotNull
    @NotEmpty
    @Column(nullable = false)
    private String password;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinTable(name = "wallets",
            joinColumns =
                    { @JoinColumn(name = "users_id", referencedColumnName = "id") },
            inverseJoinColumns =
                    { @JoinColumn(name = "wallets_id", referencedColumnName = "id") })
    private Long walletId;

    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.MERGE)
    @JoinTable(name = "user_role",
            joinColumns = {@JoinColumn(name = "user_id")},
            inverseJoinColumns = {@JoinColumn(name = "role_id")})
    private Set<RoleEntity> roleId;

    private Timestamp timestamp;

    private Boolean deleted = Boolean.FALSE;


}
